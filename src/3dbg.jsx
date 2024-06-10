import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';


export default function ThreeComponent() {

  const isMediumScreen = useMediaQuery({ minWidth: 768 }); // Adjust this value as needed

  return (
    isMediumScreen ?
    <Spline scene="https://prod.spline.design/5BLCkPxfeAPSjGYX/scene.splinecode" />
    :
    <Spline scene="https://prod.spline.design/OYaZdhvGTGtzpicD/scene.splinecode" />

  );
}
