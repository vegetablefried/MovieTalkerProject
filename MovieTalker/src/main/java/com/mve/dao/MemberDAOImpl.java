package com.mve.dao;

import java.util.List;

import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mve.dto.MemberVO;
 

@Repository
public class MemberDAOImpl implements MemberDAO {
 
    @Inject
    private SqlSession sqlSession;
    
  
    
    private static final String Namespace = "com.mve.mapper.memberMapper";
    
    @Override
    public List<MemberVO> selectMember() throws Exception {
 
        return sqlSession.selectList(Namespace+".selectMember");
    }


    @Override
	public void joinMember(MemberVO member) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert(Namespace+".joinMember", member);
	} 

/*
	@Override
	public MemberVO loginMember(MemberVO member) {
		// TODO Auto-generated method stub
		MemberVO res = null;
		
		try {
			res = sqlSession.selectOne(Namespace+".loginMember", member);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
*/





 
}