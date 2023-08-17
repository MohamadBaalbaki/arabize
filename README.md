# arabize
Node.js API wrapper for [Yamli](https://www.yamli.com/)'s Latin to Arabic transliteration engine

### Description

arabize is the first Node.js API wrapper for [Yamli](https://www.yamli.com/)'s Latin to Arabic transliteration engine. It is fast, asynchronous, and very easy to use.

### Installation

After creating a Node.js project using ```npm init```, you can install arabize by executing the following npm command:

```bash
npm install arabize
```

### Import

Once the package is installed, you can import the library using the `import` keyword since it is an ES Module:

```js
import { arabize } from 'arabize';
```

### Usage

```js
import { arabize } from 'arabize';

(
  async () => {
    try {
      const result = await arabize('Mar7aban ya sadiqi, kayfa 7alak?');
      console.log(result); // مرحباً يا صديقي ٬ كيف حالك ؟
    } catch (err) {
      console.error(err);
    }
  }
)();
```

### People

The sole author of arabize is **Mohamad Baalbaki**

- GitHub: [https://github.com/MohamadBaalbaki/](https://github.com/MohamadBaalbaki/)
- Personal Website: [https://www.mohamadbaalbaki.com/](https://www.mohamadbaalbaki.com/)
- LinkedIn: [https://www.linkedin.com/in/mohamadbaalbaki/](https://www.linkedin.com/in/mohamadbaalbaki/)
- Email: baalbakim21@gmail.com

### Disclaimer

This package is an unofficial wrapper and is not affiliated, endorsed, or supported by [Yamli](https://www.yamli.com/) in any way. The purpose of this package is to provide a convenient interface to access [Yamli](https://www.yamli.com/)'s transliteration functionality, but it is developed and maintained independently by **Mohamad Baalbaki**.

This package was developed after carefully checking and adhering to [Yamli](https://www.yamli.com/)'s terms of use and API usage guidelines. However, it is important to understand that [Yamli](https://www.yamli.com/)'s terms and policies may change over time, thus the developer of this package cannot guarantee ongoing compliance.

Please be aware that any issues, concerns, or inquiries related to this package should be directed to the package's developer and not to [Yamli](https://www.yamli.com/).

Use this package at your own discretion and risk. The developer of this package assumes no responsibility or liability for any unintended consequences or issues that may arise from its usage.

For official information and support regarding Yamli, please visit [Yamli's official website](https://www.yamli.com/) or contact their support team.

## License

[MIT](LICENSE)
