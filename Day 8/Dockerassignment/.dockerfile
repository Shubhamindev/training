FROM alpine
COPY hello_world.sh /hello_world.sh
RUN chmod +x /hello_world.sh
CMD ["/hello_world.sh"]
