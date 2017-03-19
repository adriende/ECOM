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


@Path("/users")
@Api(value="/users")
@Produces("application/xml")
public class UserResource {

    public UserResource() {
    }

    @GET
    @ApiOperation(
            value = "Get all users",
            response = User.class)
    public List<User> getUsers() {
        System.out.println("getUsers");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        return libraryPersistentBean.getUsers();
    }
    
    @GET
    @Path("/name/{name}")
    @ApiOperation(
            value = "Get user by name",
            response = User.class)
    public List<User> getUserByName(@PathParam("name") String name) {
        System.out.println("getUserByName");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<User> users = new ArrayList<User>();
        for (User current : libraryPersistentBean.getUsers()) {
            if (name.equals(current.getName())) {
                users.add(current);
            }
        }
        return users;
    }
    
    @POST
    @ApiOperation(
            value = "Post new user",
            response = DemandeInscription.class)
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void postUser(@FormParam("name") String name, @FormParam("password") String password, @FormParam("address") String address, @FormParam("email") String email) throws IOException {

    	User user = new User(name, password, address, email);
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        libraryPersistentBean.addUser(user);

    }

}