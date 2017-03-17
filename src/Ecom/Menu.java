package Ecom;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "menu")
public class Menu implements Serializable{

    private String id;
    private String name;
    private Float price;
    private String description;
    private String restaurant;



    public Menu() {
    }

    public Menu(String id,String name, Float price, String description, String restaurant) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.restaurant = restaurant;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(String restaurant) {
        this.restaurant = restaurant;
    }


}