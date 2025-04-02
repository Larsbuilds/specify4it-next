import {getRequestConfig} from "next-intl/server";\n\nexport default getRequestConfig(async ({locale}) => ({\n  messages: (await import(`./messages/${locale}.json`)).default\n}));
