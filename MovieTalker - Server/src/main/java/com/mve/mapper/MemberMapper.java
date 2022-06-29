package com.mve.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.mve.dto.MemberVO;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class MemberMapper {
  
	@Autowired
	MemberMapper membermapper;			//MemberMapper.java 인터페이스 의존성 주입
	/*
	//회원가입 쿼리 테스트 메서드
	@Test
	public void joinMember() throws Exception{
		MemberVO member = new MemberVO();
		
		member.setid("admin");			//회원 id
		member.setpw("admin");			//회원 비밀번호
		member.setname("test");			//회원 이름
		member.setsex("test");
		member.setnumber("test");
		member.setemail("test");
	
		//membermapper.joinMember(member);			//쿼리 메서드 실행
		
		
	}
	*/
	/*
	@Test
	public void loginMember() throws Exception{
		MemberVO member = new MemberVO();
		
		member.setid("admin");
		member.setpw("admin");
		
		
		membermapper.loginMember(member);
		
	}
	*/
	
	private void joinMember(MemberVO member) {
		// TODO Auto-generated method stub
		membermapper.joinMember(member);
	}
	
/*
	public MemberVO loginMember(MemberVO member) {
		return membermapper.loginMember(member);
	}
	*/
}