package com.mve.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.mve.dto.LoginDTO;
import com.mve.dto.MemberVO;
 
public interface MemberService {
	// ȸ������
    //public void joinMember(MemberVO member) throws Exception;
    
    // �α���
   // public MemberVO loginMember(MemberVO member) throws Exception;
   	
    //public LoginDTO loginMember(LoginDTO vo) throws Exception;
    
    // ȸ�����
    public List<MemberVO> selectMember() throws Exception;
    
  
	
}