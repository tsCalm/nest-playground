## memo

- users module에서 data filtering을 원하는 경우
  -> 예) 유저의 패스워드를 클라이언트에 보내고 싶지 않은 경우 등 응답에 대한 객체의 프로퍼티를 조작하고 싶은 경우가 있다. 이 경우

  1.@UseInterceptors(ClassSerializerInterceptor)를 사용하여 필터링 처리 2. class-transformer의 plainToInstance도 같은 기능으로 동작하지만 권장하지 않음

- 직렬화 : 어떠한 데이터 구조를 송/수신하거나 저장하기 위해 전송에 적합한 포맷으로 변환하는 과정, 일반적으로 JSON을 많이 사용, 프로그램 언어에 따라 포맷이 다른 경우가 많기 때문에 직렬화가 필요
