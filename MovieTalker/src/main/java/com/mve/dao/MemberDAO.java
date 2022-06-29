package com.mve.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mve.dto.MemberVO;


@Repository
public interface MemberDAO {
	String NAMESPACE = "mymember.";
	
	
    public List<MemberVO> selectMember() throws Exception;
	
	// public MemberVO loginMember(MemberVO member);	// ·Î±×ÀÎ
	
     
}