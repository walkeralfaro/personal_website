import { useEffect, useState } from "react"
import { getRandomNumber, verifyAddNumbers } from "../../services/humanTest";


export const AddTest = ({testResponse, onResult}) => {

  const [randNumbers, setRandNumbers] = useState({
    firstRandNumber: 0,
    secondRandNumber: 0,
  })

  const [result, setResult] = useState(false);
  const {firstRandNumber, secondRandNumber} = {...randNumbers}

  useEffect(() => {
    setRandNumbers({
      ...randNumbers,
      firstRandNumber: getRandomNumber(),
      secondRandNumber: getRandomNumber(),
    })
  }, [] );

  useEffect( () => {
    setResult(verifyAddNumbers(firstRandNumber, secondRandNumber, parseInt(testResponse)));
  }, [testResponse] );
  
  useEffect( () => {
    onResult(result);
  }, [result] )

  return (
    <div>
      { firstRandNumber } + { secondRandNumber }
    </div>
  )
}
