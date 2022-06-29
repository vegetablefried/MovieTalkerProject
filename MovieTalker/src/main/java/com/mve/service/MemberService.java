package com.mve.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.mve.dto.LoginDTO;
import com.mve.dto.MemberVO;
 
public interface MemberService {
	// 회원가입
    //public void joinMember(MemberVO member) throws Exception;
    
    // 로그인
   // public MemberVO loginMember(MemberVO member) throws Exception;
   	
    //public LoginDTO loginMember(LoginDTO vo) throws Exception;
    
    // 회원출력
    public List<MemberVO> selectMember() throws Exception;
    
  
	
}