package Ecom;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "demande")
public class DemandeInscription implements Serializable{

    private String id;
    private String name;
    private String city;
    private String address;
    private String food;
    private String type;
    private String email;
    private String image;


    public DemandeInscription() {
    }
    
    public DemandeInscription(String name, String city, String address, String food, String type, String email, String image) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.food = food;
        this.type = type;
        this.email = email;
        this.image = image;


    }

    public DemandeInscription(String id, String name, String city, String address, String food, String type, String email, String image) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.address = address;
        this.food = food;
        this.type = type;
        this.email = email;
        this.image = image;


    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
    
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    
    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}