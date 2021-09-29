FROM ruby:3.0.2

RUN apt-get update -qq && apt-get install -y nodejs

ADD . /Rails-Docker
WORKDIR /Rails-Docker
RUN bundle install
RUN rails db:migrate

EXPOSE 3000

CMD ["bash"]