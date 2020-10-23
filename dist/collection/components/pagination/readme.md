# Pagination

A responsive, usable, and flexible pagination.

## Usage

```html
<bal-pagination value="2" page-range="3" total-pages="20"></bal-pagination>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                      | Type      | Default |
| ------------ | ------------- | ---------------------------------------------------------------- | --------- | ------- |
| `disabled`   | `disabled`    | Disables component                                               | `boolean` | `false` |
| `pageRange`  | `page-range`  | Specify the max visible pages before and after the selected page | `number`  | `2`     |
| `totalPages` | `total-pages` | The total amount of pages                                        | `number`  | `1`     |
| `value`      | `value`       | Current selected page                                            | `number`  | `1`     |


## Events

| Event       | Description                         | Type                  |
| ----------- | ----------------------------------- | --------------------- |
| `balChange` | Triggers when a page change happens | `CustomEvent<number>` |


## Methods

### `next() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bal-icon](../icon)

### Graph
```mermaid
graph TD;
  bal-pagination --> bal-icon
  style bal-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
