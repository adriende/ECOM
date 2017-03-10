package Ecom;

import java.util.ArrayList;
import java.util.List;

public class BookRestaurantsBD {

    private static List<Restaurant> restaurants = new ArrayList<Restaurant>();

    private static List<BookRestaurants> bookRestaurants = new ArrayList<BookRestaurants>();
    //test
    static {
    	restaurants.add(new Restaurant("R123", "name", "ville","adress 1", "livraison", "chinois", "image"));
    	restaurants.add(new Restaurant("R124", "name",  "ville2","adress 2", "livraison", "chinois", "image"));
    	restaurants.add(new Restaurant("R125", "name",  "ville","adress 3", "livraison", "chinois", "image"));
    	restaurants.add(new Restaurant("R126", "name",  "ville","adress 4", "livraison", "chinois", "image"));

    }

    public static List<Restaurant> getRestaurants() {
        return restaurants;
    }

    public static List<BookRestaurants> getBookRestaurants() {
        return bookRestaurants;
    }
}
