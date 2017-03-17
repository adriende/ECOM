package Ecom;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;

@Stateless
public class LibraryPersistentBean implements LibraryPersistentBeanRemote {
    
   public LibraryPersistentBean(){
   }

   public void addRestaurant(Restaurant restaurant) {
      Connection con = null;
      String url = "jdbc:mysql://52.39.66.76:3306/restaurantgroup";
      String driver = "com.mysql.jdbc.Driver";

      String userName = "root";
      String password = "Haricotvert38";
      List<Restaurant> restaurants = new ArrayList<Restaurant>();
      try {

         Class.forName(driver).newInstance();
         con = DriverManager.getConnection(url , userName, password);

         PreparedStatement st = 
         con.prepareStatement("insert into restaurants(name) values(?)");
         st.setString(1,restaurant.getName());

         int result = st.executeUpdate();                

      } catch (SQLException ex) {
         ex.printStackTrace();
      } catch (InstantiationException ex) {
         ex.printStackTrace();
      } catch (IllegalAccessException ex) {
         ex.printStackTrace();
      } catch (ClassNotFoundException ex) {
         ex.printStackTrace();
      }    
   }    

   public List<Restaurant> getRestaurants() {
      Connection con = null;
      String url = "jdbc:mysql://52.39.66.76:3306/restaurantgroup";
      String driver = "com.mysql.jdbc.Driver";
   
      String userName = "gangscred";
      String password = "Haricotvert38";
      List<Restaurant> restaurants = new ArrayList<Restaurant>();
      try {

         Class.forName(driver).newInstance();
         con = DriverManager.getConnection(url, userName, password);

         Statement st = con.createStatement();
         ResultSet rs = st.executeQuery("select * from restaurants");

         Restaurant restaurant;
         while (rs.next()) {
        	 restaurant = new Restaurant();
        	 restaurant.setId(rs.getString(1));                 
        	 restaurant.setName(rs.getString(2));
        	 restaurant.setCity(rs.getString(3));
        	 restaurant.setAddress(rs.getString(4));
        	 restaurant.setType(rs.getString(5));
        	 restaurant.setFood(rs.getString(6));
        	 restaurant.setImageURL(rs.getString(7));


            restaurants.add(restaurant);
         }
      } catch (SQLException ex) {
         ex.printStackTrace();
      } catch (InstantiationException ex) {
         ex.printStackTrace();
      } catch (IllegalAccessException ex) {
         ex.printStackTrace();
      } catch (ClassNotFoundException ex) {
         ex.printStackTrace();
      }finally {
    	    if ( con != null ) {
    	        try {
    	            /* Et enfin on ferme la connexion */
    	            con.close();
    	        } catch ( SQLException ignore ) {
    	        }
    	    }
      }
      return restaurants;
   }
   
   public List<Menu> getMenus() {

	      Connection con = null;
	      String url = "jdbc:mysql://52.39.66.76:3306/restaurantgroup";
	      String driver = "com.mysql.jdbc.Driver";
	   
	      String userName = "gangscred";
	      String password = "Haricotvert38";
	      List<Menu> menus = new ArrayList<Menu>();
	      try {

	         Class.forName(driver).newInstance();
	         con = DriverManager.getConnection(url, userName, password);

	         Statement st = con.createStatement();
	         ResultSet rs = st.executeQuery("select * from menus");

	         Menu menu;
	         while (rs.next()) {
	        	 menu = new Menu();
	        	 menu.setId(rs.getString(1));                 
	        	 menu.setName(rs.getString(2));
	        	 menu.setPrice(rs.getFloat(3));
	        	 menu.setDescription(rs.getString(4));
	        	 menu.setRestaurant(rs.getString(5));



	        	 menus.add(menu);
	         }
	      } catch (SQLException ex) {
	         ex.printStackTrace();
	      } catch (InstantiationException ex) {
	         ex.printStackTrace();
	      } catch (IllegalAccessException ex) {
	         ex.printStackTrace();
	      } catch (ClassNotFoundException ex) {
	         ex.printStackTrace();
	      }finally {
	    	    if ( con != null ) {
	    	        try {
	    	            con.close();
	    	        } catch ( SQLException ignore ) {
	    	        }
	    	    }
	      }
	      return menus;
	   }

		@Override
		public void addDemande(DemandeInscription demande) {
			Connection con = null;
		      String url = "jdbc:mysql://52.39.66.76:3306/restaurantgroup?useSSL=false";
		      String driver = "com.mysql.jdbc.Driver";

		      String userName = "gangscred";
		      String password = "Haricotvert38";
		     // List<DemandeInscription> demandes = new ArrayList<DemandeInscription>();
		      try {

		         Class.forName(driver).newInstance();
		         con = DriverManager.getConnection(url , userName, password);

		         PreparedStatement st = 
		         con.prepareStatement("insert into demandeInscription(name, city, address, food, type, email) values( ?, ?, ?, ?, ?, ?)");
		         st.setString(1,demande.getName());
		         st.setString(2,demande.getCity());
		         st.setString(3,demande.getAddress());
		         st.setString(4,demande.getFood());
		         st.setString(5,demande.getType());
		         st.setString(6,demande.getEmail());


		         int result = st.executeUpdate();    
		         st.close();


		      } catch (SQLException ex) {
		         ex.printStackTrace();
		      } catch (InstantiationException ex) {
		         ex.printStackTrace();
		      } catch (IllegalAccessException ex) {
		         ex.printStackTrace();
		      } catch (ClassNotFoundException ex) {
		         ex.printStackTrace();
		      }   finally {
		          if (con != null) {
		              try {
						con.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
		          }
		      } 
			
		}
		
		@Override
		public List<DemandeInscription> getDemandes() {
		    Connection con = null;
		      String url = "jdbc:mysql://52.39.66.76:3306/restaurantgroup";
		      String driver = "com.mysql.jdbc.Driver";
		   
		      String userName = "gangscred";
		      String password = "Haricotvert38";
		      List<DemandeInscription> demandes = new ArrayList<DemandeInscription>();
		      try {

		         Class.forName(driver).newInstance();
		         con = DriverManager.getConnection(url, userName, password);

		         Statement st = con.createStatement();
		         ResultSet rs = st.executeQuery("select * from demandeInscription");

		         DemandeInscription demande;
		         while (rs.next()) {
		        	 demande = new DemandeInscription();
		        	 demande.setId(rs.getString(1));                 
		        	 demande.setName(rs.getString(2));
		        	 demande.setCity(rs.getString(3));
		        	 demande.setAddress(rs.getString(4));
		        	 demande.setFood(rs.getString(5));
		        	 demande.setType(rs.getString(6));
		        	 demande.setEmail(rs.getString(7));

		        	 demandes.add(demande);
		         }
		      } catch (SQLException ex) {
		         ex.printStackTrace();
		      } catch (InstantiationException ex) {
		         ex.printStackTrace();
		      } catch (IllegalAccessException ex) {
		         ex.printStackTrace();
		      } catch (ClassNotFoundException ex) {
		         ex.printStackTrace();
		      }finally {
		    	    if ( con != null ) {
		    	        try {
		    	            con.close();
		    	        } catch ( SQLException ignore ) {
		    	        }
		    	    }
		      }
		      return demandes;
		}
   
}