// import { styled } from "styled-components"
import HeroSection from "../components/Hero-section"
import { useProductContext } from "../context/product-context"
const About = () => {

  const { singleProduct } =
    useProductContext();


  const data = {
    name: "Al-Amin E-commerce"
  }
 return (
   <>
    <HeroSection myData={data} />
    {console.log(singleProduct.id)}
   </>
 )
}



export default About
