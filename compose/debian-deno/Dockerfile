FROM hayd/debian-deno

WORKDIR /app

USER deno

RUN deno install --unstable -A -f -n aleph http://deno.land/x/aleph/cli.ts



WORKDIR /sandbox

RUN echo y | aleph init hello

COPY ./sandbox/h.ts /sandbox/h.ts
RUN deno run './h.ts'
