import Button from 'react-bootstrap/Button';
function ButtonPage({ color,text }: { color: string,
 text: string
 }) {
  return  <Button variant={color}>{text}</Button>
}

export default ButtonPage;