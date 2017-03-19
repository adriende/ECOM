package Ecom;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@Path("/restaurants")
@Api(value="/restaurants")
@Produces("application/xml")
public class RestaurantResource {

    public RestaurantResource() {
    }

    @GET
    @ApiOperation(
            value = "Get all restaurants",
            response = Restaurant.class)
    public List<Restaurant> getRestaurants() {
        System.out.println("getRestaurants");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        return libraryPersistentBean.getRestaurants();
    }
    
    @GET
    @Path("/city/{city}")
    @ApiOperation(
            value = "Get restaurants by city",
            response = Restaurant.class)
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
    @Path("/name/{name}")
    @ApiOperation(
            value = "Get restaurants by name",
            response = Restaurant.class)
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
    @ApiOperation(
            value = "Get restaurants by type of food",
            response = Restaurant.class)
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
    @Path("/cityAndName/{city}&{name}")
    @ApiOperation(
            value = "Get restaurants by city and name",
            response = Restaurant.class)
    public List<Restaurant> getRestaurantsByCityAndName(@PathParam("city") String city, @PathParam("name") String name) {
        System.out.println("getRestaurantsByCityAndName");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (city.equals(current.getCity()) && name.equals(current.getName())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    @GET
    @Path("/cityAndFood/{city}&{food}")
    @ApiOperation(
            value = "Get restaurants by city and type of food",
            response = Restaurant.class)
    public List<Restaurant> getRestaurantsByCityAndFood(@PathParam("city") String city, @PathParam("food") String food) {
        System.out.println("getRestaurantsByCityAndFood");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (city.equals(current.getCity()) && food.equals(current.getFood())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    @GET
    @Path("/nameAndFood/{name}&{food}")
    @ApiOperation(
            value = "Get restaurants by name and type of food",
            response = Restaurant.class)
    public List<Restaurant> getRestaurantsByNameAndFood(@PathParam("name") String name, @PathParam("food") String food) {
        System.out.println("getRestaurantsByNameAndFood");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (name.equals(current.getName()) && food.equals(current.getFood())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    @GET
    @Path("/cityAndNameAndFood/{city}&{name}&{food}")
    @ApiOperation(
            value = "Get restaurants by city, name and type of food",
            response = Restaurant.class)
    public List<Restaurant> getRestaurantsByCityAndNameAndFood(@PathParam("city") String city, @PathParam("name") String name, @PathParam("food") String food) {
        System.out.println("getRestaurantsByCityAndNameAndFood");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Restaurant> restaurants = new ArrayList<Restaurant>();
        for (Restaurant current : libraryPersistentBean.getRestaurants()) {
            if (city.equals(current.getCity()) && name.equals(current.getName()) && food.equals(current.getFood())) {
                restaurants.add(current);
            }
        }
        return restaurants;
    }
    
    
    @GET
    @Path("/numRestaurant/{id}")
    @ApiOperation(
            value = "Get restaurants by id",
            response = Restaurant.class)
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
    @ApiOperation(
            value = "Get restaurants by search",
            response = Restaurant.class)
    public List<Restaurant> searchRestaurantsByCriteria(@QueryParam("ville") String ville, @QueryParam("starthour") String startHour, @QueryParam("endhour") String endHour) {
        System.out.println("searchRestaurantsByCriteria");

        return BookRestaurantsBD.getRestaurants().subList(0, 2);
    }

    
    @POST
    @ApiOperation(
            value = "Post a new restaurant",
            response = Restaurant.class)
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void postRestaurant(@FormParam("name") String name, @FormParam("ville") String ville, @FormParam("address") String address, @FormParam("type") String type,
    		@FormParam("food") String food, @FormParam("image") String image) throws IOException {

    	Restaurant restaurant = new Restaurant(name, ville, address, type, food, image);
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        libraryPersistentBean.addRestaurant(restaurant);

    }
}