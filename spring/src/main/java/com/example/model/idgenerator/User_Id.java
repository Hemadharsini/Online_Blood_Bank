package com.example.model.idgenerator;

/*import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
*/
/*import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class User_Id {
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		// TODO Auto-generated method stub
		System.out.println("in id gen");
		String prefix = "userid";
        Connection connection = session.connection();

        try {
            Statement statement=connection.createStatement();

            ResultSet rs=statement.executeQuery("select count(user_id) as Id from login_model");
        	//String q3="SELECT count(*) FROM vmanagement2.jobcard;";
        	//Statement st=con.createStatement();
        	//ResultSet rs2 = st.executeQuery(q3);
        	rs.next();
        	int indicator = 1;
        	int bloodbankid = rs.getInt(1)+1;
        	String p = prefix+new Integer( bloodbankid).toString();
        	//String bloodbankid = rs.getString(1);
        	System.out.println("Bloodbankid "+bloodbankid);
        	System.out.println("p search "+p);
        	while(indicator ==1)
        	{
        		p = prefix+new Integer( bloodbankid).toString();
        		String que = "select exists(select user_id from login_model where user_id= '"+ p+"');";
        		System.out.println(que);
        		//Statement st=connection.createStatement();
        		ResultSet rs4 = statement.executeQuery(que);
        		rs4.next();
        		if(rs4.getInt(1)==0)
        		{
        			indicator = 0;
        		}
        		else
        		{
        			bloodbankid++;
        		}
        	}
        	

           // if(rs.next())
            {
                //int id=rs.getInt(1)+1;
                String generatedId = prefix + new Integer(bloodbankid).toString();
                System.out.println("Generated Id: " + generatedId);
                return generatedId;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
		return null;
	}

}
*/


import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class User_Id implements IdentifierGenerator {
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		// TODO Auto-generated method stub
		System.out.println("in id gen");
		String prefix = "Userid";
        Connection connection = session.connection();

        try {
            Statement statement=connection.createStatement();

            ResultSet rs=statement.executeQuery("select count(user_id) as Id from login_model");
        	//String q3="SELECT count(*) FROM vmanagement2.jobcard;";
        	//Statement st=con.createStatement();
        	//ResultSet rs2 = st.executeQuery(q3);
        	rs.next();
        	int indicator = 1;
        	int bloodbankid = rs.getInt(1)+1;
        	String p = prefix+new Integer( bloodbankid).toString();
        	//String bloodbankid = rs.getString(1);
        	System.out.println("Bloodbankid "+bloodbankid);
        	System.out.println("p search "+p);
        	while(indicator ==1)
        	{
        		p = prefix+new Integer( bloodbankid).toString();
        		String que = "select exists(select user_id from login_model where user_id= '"+ p+"');";
        		System.out.println(que);
        		//Statement st=connection.createStatement();
        		ResultSet rs4 = statement.executeQuery(que);
        		rs4.next();
        		if(rs4.getInt(1)==0)
        		{
        			indicator = 0;
        		}
        		else
        		{
        			bloodbankid++;
        		}
        	}
        	

           // if(rs.next())
            {
                //int id=rs.getInt(1)+1;
                String generatedId = prefix + new Integer(bloodbankid).toString();
                System.out.println("Generated Id: " + generatedId);
                return generatedId;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
		return null;
	}

}
