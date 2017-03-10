package Ecom;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

public class BookRestaurantsResource {

    @POST
    public String createBookRestaurants(@QueryParam("id") String id, @QueryParam("numberPlaces") int numberPlaces) {  	
    	Restaurant currentRestaurant = null;

        for (Restaurant current : BookRestaurantsBD.getRestaurants()) {
            if (current.getId().equals(id)) {
                currentRestaurant = current;
            }
        }
        
        if (currentRestaurant == null) {
            return "";
        }

        BookRestaurants newBookRestaurants = new BookRestaurants();
        newBookRestaurants.setNumberPlaces(numberPlaces);
        newBookRestaurants.setCurrentRestaurant(currentRestaurant);
        newBookRestaurants.setNumBook(Long.toString(System.currentTimeMillis()));

        BookRestaurantsBD.getBookRestaurants().add(newBookRestaurants);

        String numBook = newBookRestaurants.getNumBook();
        System.out.println(numBook);
		return numBook;
    }

    @GET
    public List<BookRestaurants> getBookRestaurants() {
        System.out.println("getBookRestaurants");

        return BookRestaurantsBD.getBookRestaurants();
    }

    @GET
    @Path("{id}")
    public BookRestaurants getBookRestaurants(@PathParam("id") String bookNumber) {
        List<BookRestaurants> bookRestaurants = BookRestaurantsBD.getBookRestaurants();

        for (BookRestaurants current : bookRestaurants) {
            if (current.getNumBook().equals(bookNumber)) {
                return current;
            }
        }

        return null;
    }

    @DELETE
    @Path("{id}")
    public void removeBookRestaurants(@PathParam("id") String bookNumber) {
        BookRestaurants currentBookRestaurants = null;
        for (BookRestaurants current : BookRestaurantsBD.getBookRestaurants()) {
            if (current.getNumBook().equals(bookNumber)) {
                currentBookRestaurants = current;
            }
        }

        BookRestaurantsBD.getBookRestaurants().remove(currentBookRestaurants);
    }
}