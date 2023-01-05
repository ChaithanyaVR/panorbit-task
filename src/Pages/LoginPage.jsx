
import LoginBox from '../Components/LoginBox/LoginBox'
import './LoginPage.css'

function LoginPage() {
return (
  <>
      <section className="loginpage-section">
     
      <div class='wave'>
      <svg 
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="491.419mm" height="150.636mm">
<defs>
<linearGradient id="PSgrad_0" x1="0%" y1="57%" x2="81%" y2="0%">
<stop offset="0%" stop-color="#702CC8" stop-opacity="1" />
<stop offset="100%" stop-color="#325FC8" stop-opacity="1" />
</linearGradient>

</defs>
                

<path fill-rule="evenodd"  fill="rgb(22, 186, 10)"
d="M0.575,242.478 C0.575,242.478 33.784,381.753 294.399,311.613 C555.14,241.472 836.133,393.181 1003.31,419.382 C1169.930,445.582 1344.632,388.872 1392.424,366.514 C1390.734,442.600 1391.407,0.506 1391.407,0.506 L2.609,0.506 L0.575,242.478 Z"/>
<path fill="url(#PSgrad_0)"
d="M0.575,242.478 C0.575,242.478 33.784,381.753 294.399,311.613 C555.14,241.472 836.133,393.181 1003.31,419.382 C1169.930,445.582 1344.632,388.872 1392.424,366.514 C1390.734,442.600 1391.407,0.506 1391.407,0.506 L2.609,0.506 L0.575,242.478 Z"/>
</svg>
</div>

<div className='wave-outline'>
<svg 
xmlns="http://www.w3.org/2000/svg"
xmlnsxlink="http://www.w3.org/1999/xlink"
width="492.478mm" height="190.636mm">
<defs>
<filter id="Filter_0">
  <feFlood flood-color="rgb(223, 211, 242)" flood-opacity="1" result="floodOut" />
  <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
  <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
</filter>

</defs>
<g filter="url(#Filter_0)">
<path fill-rule="evenodd"  fill="rgb(22, 186, 10)"
d="M0.631,234.626 C0.612,231.689 40.784,390.990 297.400,311.338 C557.77,239.103 840.329,396.88 1006.338,420.129 C1172.866,445.429 1347.638,388.884 1395.424,366.514 C1393.734,442.600 1394.407,0.506 1394.407,0.506 C931.474,0.506 468.542,0.506 5.609,0.506 C4.907,81.169 0.44,150.466 0.631,234.626 Z"/>
</g>
</svg>
</div>
     <LoginBox/>
      </section>
  </>
  
)
}

export default LoginPage