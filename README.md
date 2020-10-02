# BePro Widget Preview

## Install the Widget

Navigate to your application project folder and enter:

```bash
npm i bepro-widget
```

## Initialize the Widget

```js
import { BeProWidget } from "bepro-widget";
```

## Configuration

| Property | Type     | Optional | Default Value | Description                                                     |
| -------- | -------- | -------- | ------------- | --------------------------------------------------------------- |
| data     | object   | true     | null          | show data as JSON in widget                                     |
| onClick  | function | true     | none          | add `_widget` to all keys in given data and send it as callback |

### Render Widget

```js
<BeProWidget
  onClick={(obj) => console.log(obj)}
  data={{ bool: true, number: 5 }}
/>
```
