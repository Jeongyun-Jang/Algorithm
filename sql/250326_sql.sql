-- 조건, 테이블, 컬럼, 집계
-- 1. type2 is null cnt
select count(id) as cnt from basic.pokemon where type2 is null;

-- 2. type2가 없는 포켓몬의 type1과 type1의 포켓몬 수를 알려주는 쿼리를 작성해주세요. 단, type1의 포켓몬 수가 큰 순으로 정렬해주세요
select type1, count(id) as cnt 
from basic.pokemon 
where type2 is null 
group by type1 
order by cnt desc;

-- 3. type2 상관없이 type1의 포켓몬 수를 알 수 있는 쿼리를 작성해주세요
select type1, count(id) as cnt 
from basic.pokemon 
group by type1 
order by cnt desc;

-- 4. 전설 여부에 따른 포켓몬 수를 알 수 있는 쿼리를 작성해주세요
select is_legendary, count(id) as cnt from basic.pokemon group by is_legendary;

-- *5. 동명 이인이 있는 이름은 무엇일까요? (한번에 찾으려고 하지 않고 단계적으로 가도 괜찮아요)
select name, count(name) as trainer_cnt from basic.trainer group by name having trainer_cnt >= 2;

-- 6. trainer 테이블에서 “Iris” 트레이너의 정보를 알 수 있는 쿼리를 작성해주세요
select * from basic.trainer where name = "Iris";

-- 7. trainer 테이블에서 “Iris”,”Whitney”, “Cynthia” 트레이너의 정보를 알 수 있는 쿼리를 작성해주세요
-- (힌트) 컬럼 IN ("Iris", "Whitney", "Cynthia")
select * from basic.trainer where name in ("Iris", "Whitney", "Cynthia");

-- 8. 전체 포켓몬 수는 얼마나 되나요?
select count(id) as cnt from basic.pokemon;

-- 9. 세대(generation) 별로 포켓몬 수가 얼마나 되는지 알 수 있는 쿼리를 작성해주세요
select generation, count(id) as cnt from basic.pokemon group by generation;

-- 10. type2가 존재하는 포켓몬의 수는 얼마나 되나요?
select count(id) as cnt from basic.pokemon where type2 is not null;

-- *11. type2가 있는 포켓몬 중에 제일 많은 type1은 무엇인가요?
select type1, count(id) as cnt from basic.pokemon group by type1 order by cnt desc limit 1;

-- *12. ? 단일(하나의 타입만 있는) 타입 포켓몬 중 많은 type1은 무엇일까요?
select type1, count(id) as cnt from basic.pokemon where type2 is null group by type1 order by cnt desc limit 1;

-- 13. 포켓몬의 이름에 "파"가 들어가는 포켓몬은 어떤 포켓몬이 있을까요? (힌트) 컬럼 LIKE "파%"
select kor_name from basic.pokemon where kor_name like "%파%";

-- 14. 뱃지가 6개 이상인 트레이너는 몇 명이 있나요?
select count(id) as cnt from basic.trainer where badge_count >= 6;

-- *15. 트레이너가 보유한 포켓몬(trainer_pokemon)이 제일 많은 트레이너는 누구일까요 limit 1
select trainer_id, count(pokemon_id) as cnt from basic.trainer_pokemon group by trainer_id order by cnt desc limit 1;

-- 16. 포켓몬을 많이 풀어준 트레이너는 누구일까요?
select trainer_id, count(trainer_id) as cnt from basic.trainer_pokemon where status = 'Released' group by trainer_id order by cnt desc limit 1;

-- 17. 트레이너 별로 풀어준 포켓몬의 비율이 20%가 넘는 포켓몬 트레이너는 누구일까요? 풀어준 포켓몬의 비율 = (풀어준 포켓몬 수/전체 포켓몬의 수)
-- (힌트) COUNTIF(조건)
select trainer_id,
  countif(status = 'Released') as released_cnt,
  count(pokemon_id) as pokemon_cnt,
  countif(status = 'Released') / count(pokemon_id) as released_ratio
from basic.trainer_pokemon
group by trainer_id
having released_ratio >= 0.2;