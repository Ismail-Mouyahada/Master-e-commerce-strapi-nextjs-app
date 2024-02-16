/** @type {import('next').NextConfig} */

const nextConfig = {
    env:{
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        STRAPI_TOKEN: process.env.STRAPI_TOKEN,
        STRAPI_API_HOST: process.env.STRAPI_API_HOST,
    },

    images:{
          domains:['i.ibb.co','localhost','placehold.co','cdn3.iconfinder.com','img/malechef.jpg'],
    }
};

export default nextConfig;
