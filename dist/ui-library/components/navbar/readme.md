# Navbar

A responsive horizontal navbar that can support images, links, buttons, and dropdowns 

## Usage

```html
<bal-navbar>
    <span slot="navbar-brand">
        App Name
    </span>
</bal-navbar>

<bal-navbar light>
    <span slot="navbar-brand">
        App Name
    </span>
</bal-navbar>
```

```html
<bal-navbar>
    <span slot="navbar-brand">
        <img src="docs/assets/images/icon.svg" />
    </span>
</bal-navbar>
```

### Light mode

```html
<bal-navbar light>
    <span slot="navbar-brand">
        <img src="docs/assets/images/banner.svg" />
    </span>
</bal-navbar>
```

### Actions

```html
<bal-navbar>
    <span slot="navbar-brand">
        App Name
    </span>
    <a slot="navbar-start" class="navbar-item">
        Home
    </a>
    <div slot="navbar-end" class="navbar-item">
        <bal-button inverted>Action</bal-button>
    </div>
</bal-navbar>
<br>
<bal-navbar light logo-src="docs/assets/images/logo.png">
    <span slot="navbar-brand">
        App Name
    </span>
    <a slot="navbar-start" class="navbar-item">
        Home
    </a>
    <div slot="navbar-end" class="navbar-item">
        <bal-button inverted>Action</bal-button>
    </div>
</bal-navbar>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type      | Default |
| ---------- | ----------- | ----------- | --------- | ------- |
| `light`    | `light`     |             | `boolean` | `false` |
| `logoHref` | `logo-href` |             | `string`  | `''`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
