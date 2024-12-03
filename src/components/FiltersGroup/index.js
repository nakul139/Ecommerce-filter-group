import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingFilterList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)
      const ratingClassName =
        rating.ratingId === activeRatingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingFilterList()}</ul>
    </>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoryList()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button
        className="clear-filter-button"
        type="button"
        onClick={clearFilters}
      >
        clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
