<!--实例-->
<html>
<head>
  <title> 表单应用 </title>
  <link rel="stylesheet" type="text/css" href="biaodan.css">
</head>

<body>
<div class="container">
  <form name="form1"  method="post"  action="">
    <table width="408" border="1" align="center">
       <tr>
          <td width="34" height="32"> &nbsp; </td>
          <td colspan="2" align="center"> 会员注册  </td>
       </tr>
      <tr>
         <td>&nbsp; </td>
         <td width="83"><div align="right">用户名：</div></td>
         <td width="269"><input type="text" name="textfield"></td>
      </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">密码：</div></td>
         <td><input type="password" name="textfield2"></td>
         
      </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">确认密码：</div></td>
         <td><input type="password" name="textfield3"></td>
      </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">性别：</div></td>
         <td><input type="radio" name="radiobutton"  value="radiobutton"> 男
                  <input type="radio" name="radiobutton"  value="radiobutton">女</td>
      </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">爱好：</div></td>
         <td><input type="checkbox" name="checkbox"  value="checkbox"> 体育
                  <input type="checkbox" name="checkbox2"  value="checkbox">音乐
                  <input type="checkbox" name="checkbox3"  value="checkbox">文学
                  <input type="checkbox" name="checkbox4"  value="checkbox">其他</td>

       </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">特长：</div></td>
         <td><select name="select"><option value="？？？"></option>
             <option value ="volvo">吃饭</option>
             <option value ="saab">睡觉</option>
             <option value="opel">打豆豆</option>
             <option value="audi">没有啦</option></select></td>

       </tr>
      <tr>
         <td>&nbsp; </td>
         <td><div align="right">联系电话：</div></td>
         <td><input type="text" name="textfield4"  </td>

       </tr>
      <header><tr>
          <td>&nbsp; </td>
         <input type="submit" name="Submit" value="提交"></td>
         <input type="reset" name="Submit2" value="重置"></td>
      </tr></header>
    </table>
  </form>
</div>
 </body>
</html>

