package com.mve.dto;

import java.sql.Date;

public class MovieVO {
	 
    public String title;
    public String link;
    public String image;
    public String subtitle;
    public String description;
    public float userRating;


  //생성자 2개 : 기본생성자, 멤버변수를 인자로 전부를 가진 생성자
  	public MovieVO() {}
  	public MovieVO(String title, String link, String image, String subtitle, String description, float userRating) {
  		super();
  		this.title = title;
  		this.link = link;
  		this.image = image;
  		this.subtitle = subtitle;
  		this.description = description;
  		this.userRating = userRating;
  	}
    
    public String gettitle() {
        return title;
    }
 
    public void settitle(String title) {
        this.title = title;
    }
 
    public String getlink() {
        return link;
    }
 
    public void setlink(String link) {
        this.link = link;
    }
 
    public String getimage() {
        return image;
    }
 
    public void setimage(String image) {
        this.image = image;
    }

    public String getsubtitle() {
        return subtitle;
    }
   
    public void setsubtitle(String subtitle) {
        this.subtitle = subtitle;
    }
    public String getdescription() {
        return description;
    }
 
    public void setdescription(String description) {
        this.description = description;
    }
    
    public float getuserRating() {
        return userRating;
    }
 
    public void setuserRating(float userRating) {
        this.userRating = userRating;
    }
    
    /*
    @Override
    public String toString() {
    	return "MovieVO [title=" + title + ", link=" + link + ", image=" + image + ", subtitle=" + subtitle + ", userRating=" + userRating + ", description=" + description + "]";
    }    
    */
}

