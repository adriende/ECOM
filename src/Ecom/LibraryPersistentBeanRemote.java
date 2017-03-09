package Ecom;

import java.util.List;
import javax.ejb.Remote;

@Remote
public interface LibraryPersistentBeanRemote {

   void addRestaurant(Restaurant restaurantName);

   public List<Restaurant> getRestaurants();

    
}