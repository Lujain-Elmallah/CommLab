@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  position: relative;
}
body
{
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(#55101bcf,#55101bcf);
}
header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
header ul
{
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li
{
  list-style: none;
  margin-left: 20px;
}

header ul li a
{
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}
header ul li a:hover,
header ul li a.active
{
  background: #fff;
  color: #2b1055;
}
section::before
{
  content: ' ';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #55101bcf, transparent);
  z-index: 1000;
}
section
{
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
section img
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#background
{
  mix-blend-mode: screen;
}
section img#front
{
  z-index: 10;
}
#text
{
  position: absolute;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  font-size: 2.5em;
  z-index: 9;
}
#btn
{
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
}
.vid
{
  background-image: url('IMG/vid-back.jpg');
  position: relative;
  padding: 100px;
  background: #6c1f2c30;
}
.vid h2
{
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #fff;
  font-family:'Courier New', Courier, monospace;
  color: antiquewhite;
}

.vid video
{
  position:block;
}
.sec
{
  padding: 100px;
  background: #6c1f2c86;
  display: flex;
  height: 900px;
}
.sec img
{
  max-width: 420px;
}
.sec h2
{
  position: absolute;
  font-family:'Courier New', Courier, monospace;
  font-size: 3.5em;
  color: #fff;
  margin-bottom: 10px;
  width: 500px;
  top: 400px;
  left: 300px;
}
.sec p
{
  font-family:'Courier New', Courier, monospace;
  font-size: 1em;
  color: #fff;
}

#first
{
  position: absolute;
  width: 420px;
  top: 185px;
  left: 650px;
  color: #fff;
}
#second
{
  position: absolute;
  width: 420px;
  top: 535px;
  left: 125px;
  color: #fff;
}
#img1
{
  position: absolute;
  float: right;    
  margin: 0 0 0 15px;
  margin-right: 15px; 
  top: 175px;
  left: 100px;
}
#img2
{
  position: absolute;
  margin: 0 0 0 15px;
  top: 550px;
  left: 640px;
  margin-right: 15px; 
}
#parent {
  height: 40px;
  white-space: nowrap;
  overflow: hidden; 
  font-family: 'Source Code Pro', monospace;  
  font-size: 40px;
  color: rgb(255, 255, 255);
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
}

#border {
  border-bottom: solid 3px rgba(0,255,0,.75);
  position: absolute;
  right: -7px;
  width: 45px;
}

/* Add the following CSS for the updated footer and buttons */
.footer {
  background-color: #6c1f2c;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-buttons {
  display: flex;
  justify-content: center;
}

#scroll-to-top a {
  text-decoration: none;
  color: #2b1055;
}

#email-button,
#scroll-to-top {
  background-color: #fff;
  color: #2b1055;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

#email-button:hover,
#scroll-to-top:hover {
  background-color: #8f0c0c;
  color: #fff;
}

.email-icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.top-icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
#email-button a {
  color: inherit; /* Inherit the text color from the parent element */
  text-decoration: none; /* Remove underline */
}
/* Add this CSS to set the background image */
.footer {
  background-image: url('IMG/footer.jpg'); /* Replace 'IMG/footer.jpg' with the actual path to your image */
  background-size: cover; /* Adjust background size as needed */
  background-repeat: no-repeat; /* Prevent image from repeating */
  background-position: center; /* Center the background image */
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
#typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Source Code Pro', monospace;
  font-size: 40px;
  color: rgb(255, 255, 255);
  position: relative;
  font-weight: bold;
  margin-bottom: 10px;
}
