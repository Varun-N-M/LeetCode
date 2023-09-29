# Write your MySQL query statement below
select St.student_id,St.student_name,Su.subject_name,count(E.subject_name) as attended_exams 
from Students as St
CROSS JOIN Subjects Su
left join Examinations as E
on St.student_id = E.student_id 
and Su.subject_name = E.subject_name
group by St.student_id, Su.subject_name
order by St.student_id , Su.subject_name 