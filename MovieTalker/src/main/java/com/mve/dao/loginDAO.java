package com.mve.dao;

import org.springframework.stereotype.Repository;

import com.mve.dto.LoginDTO;


@Repository
public interface loginDAO {
	
	public LoginDTO loginMember(LoginDTO vo) throws Exception;
	 
}
