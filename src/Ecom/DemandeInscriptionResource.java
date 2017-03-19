package Ecom;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@Path("/demandes")
@Api(value="/demandes")
@Produces("application/xml")
public class DemandeInscriptionResource {

    public DemandeInscriptionResource() {
    }

    @GET
    @ApiOperation(
            value = "Get all demandes of inscription",
            response = DemandeInscription.class)
    public List<DemandeInscription> getDemandes() {
        System.out.println("getDemandes");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        return libraryPersistentBean.getDemandes();
    }
    
    
    @GET
    @Path("/demande/{id}")
    @ApiOperation(
            value = "Get demandes of inscription by id",
            response = DemandeInscription.class)
    public List<DemandeInscription> getDemande(@PathParam("id") String id) {
        System.out.println("getDemande");
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        List<DemandeInscription> demandes = new ArrayList<DemandeInscription>();
        for (DemandeInscription current : libraryPersistentBean.getDemandes()) {
            if (id.equals(current.getId())) {
                demandes.add(current);
            }
        }
        return demandes;
    }


    @POST
    @ApiOperation(
            value = "Post demande of inscription",
            response = DemandeInscription.class)
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void post(@FormParam("name") String name, @FormParam("city") String city, @FormParam("address") String address, @FormParam("food") String food,
    		@FormParam("type") String type, @FormParam("email") String email, @FormParam("image") String image) throws IOException {

    	DemandeInscription demande = new DemandeInscription(name, city, address, food, type, email, image);
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        libraryPersistentBean.addDemande(demande);

    }
    
    @DELETE
    @Path("/deleteDemande/{id}")
    @ApiOperation(
            value = "Delete a demande")
    public Response removeDemande(@PathParam("id") String id) {
        DemandeInscription currentDemande = null;
        LibraryPersistentBean libraryPersistentBean = new LibraryPersistentBean();
        for (DemandeInscription current : libraryPersistentBean.getDemandes()) {
            if (current.getId().equals(id)) {
            	currentDemande = current;
            }
        }

        libraryPersistentBean.removeDemande(currentDemande);
        return Response.status(Status.ACCEPTED).build();
    }

}
