package Ecom;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "restaurant")
public class Restaurant implements Serializable{

    private String id;
    private String name;
    private String city;
    private String address;
    private String type;
    private String food;
    private String imageURL;



    public Restaurant() {
    }

    public Restaurant(String name, String city, String address, String type, String food, String imageURL) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.type = type;
        this.food = food;
        this.imageURL = imageURL;
    }
    
    public Restaurant(String id,String name, String city, String address, String type, String food, String imageURL) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.address = address;
        this.type = type;
        this.food = food;
        this.imageURL = imageURL;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

}