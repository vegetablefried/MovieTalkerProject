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
	MemberMapper membermapper;			//MemberMapper.java �������̽� ������ ����
	/*
	//ȸ������ ���� �׽�Ʈ �޼���
	@Test
	public void joinMember() throws Exception{
		MemberVO member = new MemberVO();
		
		member.setid("admin");			//ȸ�� id
		member.setpw("admin");			//ȸ�� ��й�ȣ
		member.setname("test");			//ȸ�� �̸�
		member.setsex("test");
		member.setnumber("test");
		member.setemail("test");
	
		//membermapper.joinMember(member);			//���� �޼��� ����
		
		
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
	/*
	private void joinMember(MemberVO member) {
		// TODO Auto-generated method stub
		membermapper.joinMember(member);
	}
	*/
/*
	public MemberVO loginMember(MemberVO member) {
		return membermapper.loginMember(member);
	}
	*/
}