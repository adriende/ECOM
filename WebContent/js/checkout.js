function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
    
  // règle le pb des caractères interdits
  if ('btoa' in window) {
    cvalue = btoa(cvalue);
  }
    
  document.cookie = cname + "=" + cvalue + "; " + expires+';path=/';
}

function saveCart(inCartItemsNum, cartArticles, inCartItemsSubtotal) {
	  setCookie('inCartItemsNum', inCartItemsNum, 5);
	  setCookie('inCartItemsSubtotal', inCartItemsSubtotal, 5)
	  setCookie('cartArticles', JSON.stringify(cartArticles), 5);
}

function getCookie(cname) {
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c[0] == ' ') {
	      c = c.substring(1);
	    }
	    
	    if (c.indexOf(name) != -1) {
	      if ('btoa' in window) {
	        return atob(c.substring(name.length,c.length));
	      }
	      else {
	        return c.substring(name.length,c.length);
	      }
	    }
	  }
	  return false;
}

//variables pour stocker le nombre d'articles et leurs noms
var inCartItemsNum;
var cartArticles;
var inCartItemsSubtotal;
 
// affiche/cache les éléments du panier selon s'il contient des produits
function cartEmptyToggle() {
  if (inCartItemsNum > 0) {
    $('#cart-dropdown .hidden').removeClass('hidden');
    $('#empty-cart-msg').hide();
  }
  
  else {
    $('#cart-dropdown .go-to-cart').addClass('hidden');
    $('#empty-cart-msg').show();
  }
}
 
// récupère les informations stockées dans les cookies
inCartItemsNum = parseInt(getCookie('inCartItemsNum') ? getCookie('inCartItemsNum') : 0);
cartArticles = getCookie('cartArticles') ? JSON.parse(getCookie('cartArticles')) : [];
inCartItemsSubtotal = parseFloat(getCookie('inCartItemsSubtotal') ? getCookie('inCartItemsSubtotal') : 0);
 
cartEmptyToggle();
 
// affiche le nombre d'article du panier
$('#in-cart-items-num').html(inCartItemsNum);
$('#in-cart-items-subtotal').html(inCartItemsSubtotal);
 
var items = '';
cartArticles.forEach(function(v) {
   items += '<li id="'+ v.id +'"><a href="'+ v.url +'">'+ v.name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a></li>';
});
 
$('#cart-dropdown').prepend(items);

//click bouton ajout panier
$(document).on('click', '.add-to-cart', function () {
  // récupération des infos du produit
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name').replaceAll('_', ' ');
  var price = $this.attr('data-price');
  var restaurant = $this.attr('data-restaurant').replaceAll('_', ' ');
  var url = $this.attr('data-url');
  var qt = parseInt($('#qt'+id).val());
  inCartItemsNum += qt;
  inCartItemsSubtotal = inCartItemsSubtotal + parseFloat(price*qt);

  // mise à jour du nombre de produit dans le widget
  $('#in-cart-items-num').html(inCartItemsNum);
  $('#in-cart-items-subtotal').html(inCartItemsSubtotal + "€");
  
  var newArticle = true;
  
  // vérifie si l'article est pas déjà dans le panier
  cartArticles.forEach(function(v) {
    // si l'article est déjà présent, on incrémente la quantité
    if (v.id == id) {
      newArticle = false;
      v.qt += qt;
      $('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a>');
    }
  });
  
  // s'il est nouveau, on l'ajoute
  if (newArticle) {
    $('#cart-dropdown').prepend('<li id="'+ id +'"><a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ qt +'</span></small></a></li>');
    
    cartArticles.push({
      id: id,
      name: name,
      price: price,
      restaurant: restaurant,
      qt: qt,
      url: url
    });
  }
 
  // sauvegarde le panier
  saveCart(inCartItemsNum, cartArticles, inCartItemsSubtotal);
 
  // affiche le contenu du panier si c'est le premier article
  cartEmptyToggle();
});

//si on est sur la page ayant pour url /ECOM3/checkout.html
if (window.location.pathname == '/ECOM3/checkout.html') {
	console.log("bonjour checkout");
  var items = "";
  var items2 = "";

  var subTotal = 0;
  var total;
  console.log(cartArticles);
  
  /* on parcourt notre array et on créé les lignes du tableau pour nos articles :
  * - Le nom de l'article (lien cliquable qui mène à la fiche produit)
  * - son prix
  * - la dernière colonne permet de modifier la quantité et de supprimer l'article
  *
  * On met aussi à jour le sous total et le poids total de la commande
  */
  cartArticles.forEach(function(v) {
    // opération sur un entier pour éviter les problèmes d'arrondis
    var itemPrice = v.price.replace(',', '.') * 1000;
    
    
    items2 += '<tr data-id="'+ v.id +'">\
             <td><p>'+ v.name +'</p></td>\
             <td><p>'+ v.restaurant +'</p></td>\
             <td>'+ v.price +'€</td>\
             <td><span class="qt">'+ v.qt +'</span> <span class="qt-minus" style="margin-left:6%;">–</span> <span class="qt-plus" style="margin-left:6%;">+</span> \
             <a class="delete-item" style="margin-left:6%;">Supprimer</a></td></tr>';
             
            
    subTotal += v.price.replace(',', '.') * v.qt;
  });
 
  // on reconverti notre résultat en décimal
  //subTotal = subTotal / 1000;

  // On insère le contenu du tableau et le sous total
  $('#cart-tablebody').html(items2);
  $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
  
  // lorsqu'on clique sur le "+" du panier
  $('.qt-plus').on('click', function() {
    var $this = $(this);
    
    // récupère la quantité actuelle et l'id de l'article
    var qt = parseInt($this.prevAll('.qt').html());
    var id = $this.parent().parent().attr('data-id');
 
    // met à jour la quantité
    inCartItemsNum += 1;
    $this.prevAll('.qt').html(qt + 1);
    $('#in-cart-items-num').html(inCartItemsNum);
    $('#'+ id + ' .qt').html(qt + 1);
    
    // met à jour cartArticles
    cartArticles.forEach(function(v) {
        // on incrémente la qt
        if (v.id == id){
            v.qt += 1;
            
            // récupération du prix
            // on effectue tous les calculs sur des entiers
            subTotal = ((subTotal * 1000) + (parseFloat(v.price.replace(',', '.')) * 1000)) / 1000;
        }
    });
    
    // met à jour la quantité du widget et sauvegarde le panier
    $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
    inCartItemsSubtotal = subTotal.toFixed(2).replace('.', ',');
	$('#in-cart-items-subtotal').html(inCartItemsSubtotal + "€");
    saveCart(inCartItemsNum, cartArticles, inCartItemsSubtotal);
  });
  
  // quantité -
  $('.qt-minus').click(function() {
    var $this = $(this);
    var qt = parseInt($this.prevAll('.qt').html());
    var id = $this.parent().parent().attr('data-id');
 
    if (qt > 1) {
      // maj qt
      inCartItemsNum -= 1;
      $this.prevAll('.qt').html(qt - 1);
      $('#in-cart-items-num').html(inCartItemsNum);
      $('#'+ id + ' .qt').html(qt - 1);
      
      cartArticles.forEach(function(v) {
          // on décrémente la qt
          if (v.id == id) {
              v.qt -= 1;
              
              // récupération du prix
              // on effectue tous les calculs sur des entiers
              subTotal = ((subTotal * 1000) - (parseFloat(v.price.replace(',', '.')) * 1000)) / 1000;
          }
      });
      
      $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
      inCartItemsSubtotal = subTotal.toFixed(2).replace('.', ',');
  	$('#in-cart-items-subtotal').html(inCartItemsSubtotal + "€");
      saveCart(inCartItemsNum, cartArticles, inCartItemsSubtotal);
    }
  });
  
  // suppression d'un article
  $('.delete-item').click(function() {
    var $this = $(this);
    var qt = parseInt($this.prevAll('.qt').html());
    var id = $this.parent().parent().attr('data-id');
    var arrayId = 0;
    var price;
    
    // maj qt
    inCartItemsNum -= qt;
    $('#in-cart-items-num').html(inCartItemsNum);
    
    // supprime l'item du DOM
    $this.parent().parent().hide(600);
    $('#'+ id).remove();
    
    cartArticles.forEach(function(v) {
        // on récupère l'id de l'article dans l'array
        if (v.id == id) {
            // on met à jour le sous total et retire l'article de l'array
            // as usual, calcul sur des entiers
            var itemPrice = v.price.replace(',', '.') * 1000;
            subTotal -= (itemPrice * qt) / 1000;
            cartArticles.splice(arrayId, 1);
            
            return false;
        }
        arrayId++;
    });
    
    $('.subtotal').html(subTotal.toFixed(2).replace('.', ','));
    inCartItemsSubtotal = subTotal.toFixed(2).replace('.', ',');
	$('#in-cart-items-subtotal').html(inCartItemsSubtotal + "€");
    saveCart(inCartItemsNum, cartArticles, inCartItemsSubtotal);
    cartEmptyToggle();
  });
}

  
function updateCart() {
	$('#in-cart-items-num').html(inCartItemsNum);
	$('#in-cart-items-subtotal').html(inCartItemsSubtotal + "€");
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function resumeCommande() {
	var text = "Commande de " + inCartItemsNum + " menus pour un total de " + inCartItemsSubtotal + "€";
    document.getElementById("resumeCommande").innerHTML = text;
    updateCart();
}

