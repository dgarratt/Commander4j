<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	
	<title>Production Confirmation</title>
	<link rel="stylesheet" href="style/commander.css">
</head>

<jsp:useBean id="Lang" class="com.commander4j.bean.JLanguage" scope="page">
	<jsp:setProperty name="Lang" property="hostID" value="<%=session.getAttribute(\"selectedHost\")%>" />
	<jsp:setProperty name="Lang" property="sessionID" value="<%=session.getId()%>" />
	<jsp:setProperty name="Lang" property="languageID" value="<%=session.getAttribute(\"language\")%>" />
</jsp:useBean>

<body onLoad="focusIt()">

	<div class="container">	
		
		<h1><%=Lang.getText("web_Prod_Dec_Confirm")%></h1>
		<form id="productionConfirm" name="productionConfirm" action="Process" method="post">
			
			<div class="form-group">
				<img src="./images/pallet_sscc.gif" width="50%" style="display:block; margin-left:auto; margin-right:auto;max-width:300px">
			</div>
			
			<div class="form-group">
				<br>
			</div>
			
			<div class="divTable">
				<div class="divTableBody">
				  	<div class="divTableRow">
				      	<div class="divTableCell" align="right"><label for="sscc">SSCC :</label></div>
				      	<div class="divTableCell">
				      			<%
				      			String sscc = (String) session.getAttribute("sscc");
								if (sscc == null)
								sscc = "";
								sscc = sscc.trim();
								%>
								<input type="text" id="sscc" name="sscc"  value="<%out.println(sscc);%>">
				      	</div>
				    </div>
					<div class="divTableRow">
						<div class="divTableCell">
						</div>
						<div class="divTableCell" align="center">
						   <label>Confirmed : <%String confirmCount = (String) session.getAttribute("confirmCount");out.println(" " + confirmCount + ""); %></label>
						</div>
				   	</div>	
				</div>
		    </div>
			
			<div class="form-group">
				<br>
			</div>
			
					
			<div class="form-group">
				<label style="color:black;  background-color:yellow"><%String errormessage = (String) session.getAttribute("_ErrorMessage");if (errormessage == null) errormessage = "";errormessage = errormessage.trim();out.println(errormessage);%></label>
			</div>
			
			<div class="button-group">
				<button type="submit" class="submit-btn" onclick="document.productionConfirm.button.value='Submit';document.productionConfirm.submit();">Submit</button>
				<button type="button" class="cancel-btn"  onclick="document.productionConfirm.button.value='Cancel';document.productionConfirm.submit();">Cancel</button>
				<input type="hidden" id="button" name="button" value="Submit" /> 
				<input type="hidden" name="formName" value="productionConfirm.jsp" /> 
				<input type="hidden" name="barcodeType" value="none" /> 
				<input type="hidden" name="barcodeLength" value="0" />
			</div>
			
		</form>
	</div>
				
	<script language="javascript" type="text/javascript">
	
		function focusIt() 
		{
			document.productionConfirm.sscc.focus();	
		}

		function goBack() 
		{
			window.history.back();
		}
	</script>
	
</body>
</html>
