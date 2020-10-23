# Datetimepicker

An input with a simple dropdown for selecting a date and a time.

## Usage

<script type="text/javascript">
    document.getElementById('bal-datetimepicker-select-example').addEventListener('balDatetimeChange', event => { 
        console.log('balDatetimeChange on bal-datetimepicker-select-example', event) 
    });
    document.getElementById('bal-datetimepicker-select-example').addEventListener('balBlur', event => { 
        console.log('balBlur on bal-datetimepicker-select-example', event) 
    });
    document.getElementById('bal-datetimepicker-filter-example').dateFilter =  function (str) {
      return parseInt(str.substring(0, 2)) == 5;
    };
</script>

```html
<bal-datetimepicker id="bal-datetimepicker-select-example"></bal-datetimepicker>
```

## Inverted style

```html
<div class="has-background-info is-padded">
<bal-datetimepicker id="bal-datetimepicker-select-example" inverted></bal-datetimepicker>
</div>
```

### Set Date

```html
<bal-datetimepicker value="20.02.2020 09:30"></bal-datetimepicker>
```

### Datetime Range

You can limit the date range with min-date and max-date props.

```html
<bal-datetimepicker value="20.02.2020 09:30" min-datetime="10.02.2020 9:30" max-datetime="22.02.2020 18:00"></bal-datetimepicker>
```

### Date Filter

```typescript
document.getElementById('bal-datetimepicker-filter-example').dateFilter =  function (str) {
  return parseInt(str.substring(0, 2)) == 5;
};
```

```html
<bal-datetimepicker id="bal-datetimepicker-filter-example"></bal-datetimepicker>
```

### Disabled

```html
<bal-datetimepicker disabled value="20.02.2020 09:30"></bal-datetimepicker>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                  | Type                        | Default                |
| ------------- | -------------- | ---------------------------------------------------------------------------- | --------------------------- | ---------------------- |
| `dateFilter`  | --             | Callback to determine which date in the datetimepicker should be selectable. | `(date: string) => boolean` | `(_) => true`          |
| `disabled`    | `disabled`     | Disable the input                                                            | `boolean`                   | `false`                |
| `inverted`    | `inverted`     | If `true` the datetimepicker can be used on blue background.                 | `boolean`                   | `false`                |
| `maxDatetime` | `max-datetime` | Latest date available for selection                                          | `string`                    | `""`                   |
| `maxYear`     | `max-year`     | Latest year available for selection                                          | `string`                    | `""`                   |
| `minDatetime` | `min-datetime` | Earliest datetime available for selection                                    | `string`                    | `""`                   |
| `minYear`     | `min-year`     | Earliest year available for selection                                        | `string`                    | `""`                   |
| `placeholder` | `placeholder`  | Placeholder text to render if no date has been selected.                     | `string`                    | `"Click to select..."` |
| `value`       | `value`        | The value of the timepicke with the format `dd.MM.yyyy`.                     | `string`                    | `""`                   |


## Events

| Event               | Description                                         | Type                  |
| ------------------- | --------------------------------------------------- | --------------------- |
| `balBlur`           | Emitted when the toggle loses focus.                | `CustomEvent<void>`   |
| `balDatetimeChange` | Triggers when the value of the timepicke is changed | `CustomEvent<string>` |


## Methods

### `close() => Promise<void>`

Close the timepicke dropdown

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Open the timepicke dropdown

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bal-datepicker](../datepicker)
- [bal-button](../button)
- [bal-icon](../icon)
- [bal-timeinput](../timeinput)

### Graph
```mermaid
graph TD;
  bal-datetimepicker --> bal-datepicker
  bal-datetimepicker --> bal-button
  bal-datetimepicker --> bal-icon
  bal-datetimepicker --> bal-timeinput
  bal-datepicker --> bal-dropdown
  bal-datepicker --> bal-icon
  bal-dropdown --> bal-icon
  bal-dropdown --> bal-field
  bal-field --> bal-icon
  bal-button --> bal-spinner
  style bal-datetimepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
