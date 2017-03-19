package Ecom;

import java.util.List;
import javax.ejb.Remote;

@Remote
public interface LibraryPersistentBeanRemote {

   void addRestaurant(Restaurant restaurantName);

   public List<Restaurant> getRestaurants();
   
   public List<Menu> getMenus();

   void addDemande(DemandeInscription demande);

   public List<DemandeInscription> getDemandes();
   
   public List<User> getUsers();

   void addUser(User user);
   
   void removeDemande(DemandeInscription demande);



    
}