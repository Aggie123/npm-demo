
#命名规范

## Table of Contents

  1. [项目文件夹及组件命名规范](#项目文件命名规范)
  1. [设计样式变量表及命名规范](#设计变量表及命名规范)
  
##项目文件夹及组件命名规范
- **文件夹名**：全部采用小写方式， 以-分隔。如 `input-number`,`checkbox`；
- **组件文件扩展名**：使用 `.js` 作为 React 组件的扩展名；
- **组件文件名**：使用**大驼峰命名法**。如 `MyComponent.js`；
- **组件命名**：组件名称和文件名一致，如 `MyComponent.js` 里的组件名应该是 `MyComponent`；一个目录的根组件使用 `index.js` 命名，以目录名称作为组件名称;每个组件里边必须得有index,如果有多个子组件index参考Button;如果跟RN自有组件同名，组件名称统一加MJ前缀，如MJModal,MJButton;
- **组件引用命名**：React 组件使用**大驼峰命名法**，组件实例使用**小驼峰命名法**；
- **组件属性命名**：React 组件属性使用**小驼峰命名法**；

 ```jsx
    // 组件命名：组件名称和文件名一致，如 `MyComponent.js` 里的组件名应该是 `MyComponent`；一个目录的根组件使用 `index.js` 命名，以目录名称作为组件名称
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```


     ```jsx
    // 组件引用命名：React 组件使用**大驼峰命名法**，组件实例使用**小驼峰命名法**
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

    ```jsx
    //组件属性命名：React 组件属性使用**小驼峰命名法**
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

---

##设计样式变量表及命名规范
- StyleSheet.create方式定义的样式变量使用**小驼峰命名法**;
- 通用样式变量命名规范：全部采用小写方式， 以-分隔。如 `input-number`,`checkbox`；

---

