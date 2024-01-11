# Show / Switch

- determine show whether condition with React and NextJS
- can use client side also server side

## Use

### Show

```
import { Show } from 'kirim-react-show-switch';

const Component = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow((isShow) => !isShow)}>toggle</button>
      <Show active={show}>
        <p>i'm appeared</p>
      </Show>
    </div>
  );
}

export defaul Component;
```

### Swtich

```
import { Switch } from 'kirim-react-show-switch';

const Component = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow((isShow) => !isShow)}>toggle</button>
      <Switch condition={show}>
        <p>i'm appeared</p>
        <p>i'm hide!</p>
      </Switch>
    </div>
  );
}

export defaul Component;
```
