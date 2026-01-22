FROM nginx:alpine

#remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

#copy frontend static files
COPY public/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]