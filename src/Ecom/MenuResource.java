package Ecom;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@Path("/menus")
@Api(value="/menus")
@Produces("application/xml")
public class MenuResource {

    public MenuResource() {
    }

    @GET
    @ApiOperation(
            value = "Get all menus",
            response = Menu.class)
    public List<Menu> getMenus() {
        System.out.println("getMenus");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        return libraryPersistentBean.getMenus();
    }
    
    
    @GET
    @Path("/name/{name}")
    @ApiOperation(
            value = "Get menus by name",
            response = Menu.class)
    public List<Menu> getMenusByName(@PathParam("name") String name) {
        System.out.println("getMenusByName");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<Menu> menus = new ArrayList<Menu>();
        for (Menu current : libraryPersistentBean.getMenus()) {
            if (name.equals(current.getName())) {
                menus.add(current);
            }
        }
        return menus;
    }

}