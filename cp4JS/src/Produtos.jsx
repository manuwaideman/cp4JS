import {} from 'react'
import './Produtos.css'

function Produtos(){
    return(
        <div>

        <div className='produto-item'>
            <p>Boneca Barbie O Filme</p>
            <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpg8HoJ6U1Pe94AVWZG3ltly5-Bl2ZYIgdL6TSQZ-BOXQaQAKJWH_AmZNwcsximJnnNJzTl1sFPgc6WGTN_lbCZMvueNcGIEKPKBB9SxuG' alt='Produto 1'/>
        </div>

        <div className='produto-item'>
            <p>Boneca Barbie Ginasta</p>
            <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6DJ1F9eKX4XrQFhKrCh5YhUqvZ_jg8920r9t44QPdd1ZkX6dsqUfeOyYBv66jxXSe1FNcRGJ_YjdNKLWFoAj54PCmq2yVGY1rEFFH8wPgRwKlDsUPfRz1&usqp=CAE' alt='Produto 2'/>
        </div>

        <div className='produto-item'>
            <p>Boneca Barbie Verão</p>
            <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRGF70ZeIWRuDQWytooP1RXdfdWCoGakwUPGZLBZXBcpgRj5nJos6D6MUZdQfqK7wp-aO2g-RAzN3AIZnmgqoQ9ztBf7ermFx-5HhVpOY&usqp=CAE' alt='Produto 3'/>
        </div>

        <div className='produto-item'>
            <p>Boneca Barbie Glamour</p>
            <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfDTVuOlg_nG6WlKM67O-yxBy4ZXgbBj_JnBmxpeOvEh6bGZ4x1N4mT4vzjKcAk2_tdmU9ATxXBJeheZEbTmkq9lnyuQg4Gt6JYgtTmWQu-ZqYgLujPsHn&usqp=CAE' alt='Produto 4'/>
        </div>
        </div>
    )
}

export default Produtos