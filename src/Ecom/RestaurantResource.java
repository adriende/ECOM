package Ecom;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

/**
 * @author Mickael BARON (baron@ensma.fr, baron.mickael@gmail.com)
 *
 * Date: October 2014
 */
@Path("/restaurants")
@Produces("application/xml")
public class RestaurantResource {

    public RestaurantResource() {
    }

    @GET
    public List<Restaurant> getRestaurants() {
        System.out.println("getRestaurants");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        return libraryPersistentBean.getRestaurants();
    }
    
    @GET
    @Path("/city/{city}")
    public List<Restaurant> getRestaurantsByCity(@PathParam("city") String city) {
        System.out.println("getRestaurant");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (city.equals(current.getCity())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    @GET
    @Path("/restaurantName/{name}")
    public List<Restaurant> getRestaurantsByRestaurantName(@PathParam("name") String name) {
        System.out.println("getRestaurantsByRestaurantName");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (name.equals(current.getName())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    @GET
    @Path("/food/{food}")
    public List<Restaurant> getRestaurantsByFood(@PathParam("food") String food) {
        System.out.println("getRestaurantsByFood");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (food.equals(current.getFood())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    
    @GET
    @Path("/numRestaurant/{id}")
    public Restaurant getRestaurant(@PathParam("id") String id) {
        System.out.println("getRestaurant");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();

        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (id.equals(current.getId())) {
                return current;
            }
        }
        return null;
    }

    @GET
    @Path("/search")
    public List<Restaurant> searchRestaurantsByCriteria(@QueryParam("ville") String ville, @QueryParam("starthour") String startHour, @QueryParam("endhour") String endHour) {
        System.out.println("searchRestaurantsByCriteria");

        return BookRestaurantsBD.getRestaurants().subList(0, 2);
    }

    @Path("/bookrestaurants")
    public BookRestaurantsResource getBookRestaurantsResource() {
        return new BookRestaurantsResource();
    }
}