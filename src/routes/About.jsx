// import { styled } from "styled-components"
import HeroSection from "../components/Hero-section"
import { useProductContext } from "../context/product-context"
const About = () => {

  const {state} = useProductContext();


  const data = {
    name: "Al-Amin E-commerce"
  }
 return (
   <>
    <HeroSection myData={data} />
    <p>{state}</p>
   </>
 )
}



export default About
