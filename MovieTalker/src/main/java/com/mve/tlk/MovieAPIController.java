
package com.mve.tlk;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.inject.Inject;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mve.dto.MovieVO;
//import com.mve.service.MovieService;
 
/**
 * Handles requests for the application home page.
 */
@Controller
public class MovieAPIController {  
     
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    
    @RequestMapping("/movie")
   	@ResponseBody
    public List<MovieVO> movieAPI() throws Exception{
		
    	String clientID = "5yuHUAP3luwTbozGYBo4";
    	String clientSecret = "pn6Rse5apH";
    	String text = null;

    	try {
    		text = URLEncoder.encode(" 검색어 ", "UTF-8");
    	} catch (UnsupportedEncodingException e) {
    		throw new RuntimeException("검색어 인코딩 실패", e);
    	}

    	String apiURL = "https://openapi.naver.com/v1/search/movie?query=" + text;
    	Map < String,String > requestHeaders = new HashMap<>();
    	requestHeaders.put("X-Naver-Client-Id", clientID);
    	requestHeaders.put("X-Naver-Client-Secret", clientSecret);

    	String responseBody = (String)requestHeaders.get(apiURL);
    	String json = responseBody;

    	JSONParser parser = new JSONParser();
    	JSONObject obj = (JSONObject)parser.parse(json);
    	JSONArray item = (JSONArray)obj.get("items");
    	List <MovieVO> list = null;
    	list = new ArrayList<MovieVO>();

    	//System.out.println(item.size());
       	
    	for (int i = 0; i < item.size(); i ++) {
    		MovieVO m = new MovieVO();
    		JSONObject tmp = (JSONObject)item.get(i);
    		String title = (String)tmp.get("title");
    		String image = (String)tmp.get("image");
    		String description = (String)tmp.get("description");
    		String link = (String)tmp.get("link");
    		String subtitle = (String)tmp.get("subtitle");
    		float userRating = (float)tmp.get("userRating");
    		m.settitle(title);
    		m.setimage(image);
    		m.setdescription(description);
    		m.setlink(link);
    		m.setsubtitle(subtitle);
    		m.setuserRating(userRating);
    		if (m != null) list.add(m);
    	}
    	for (MovieVO movie : list) {
    		System.out.println(movie.gettitle());
    	}
    	return list;
    
	}
}