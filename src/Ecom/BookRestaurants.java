package Ecom;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement(name = "bookrestaurants")
public class BookRestaurants {

    private String numBook;

    private Restaurant currentRestaurant;

    private int numberPlaces;

    public String getNumBook() {
        return numBook;
    }

    public void setNumBook(String bookNumber) {
        this.numBook = bookNumber;
    }

    public Restaurant getCurrentRestaurant() {
        return currentRestaurant;
    }

    public void setCurrentRestaurant(Restaurant currentRestaurant) {
        this.currentRestaurant = currentRestaurant;
    }

    public int getNumberPlaces() {
        return numberPlaces;
    }

    public void setNumberPlaces(int numberPlaces) {
        this.numberPlaces = numberPlaces;
    }
}
