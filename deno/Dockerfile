FROM debian as deno

RUN apt update && apt install -y \
    curl \
    unzip \
&& apt clean\
&& rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH "$DENO_INSTALL/bin:$PATH"

WORKDIR /prj
