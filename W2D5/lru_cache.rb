class LRUCache
  def initialize(size)
    @size = size
    @cache = []
  end

  def count
    @cache.count
  end

  def add(el)
    if @cache.include?(ele)
      @cache.delete(delete)
      @cache << ele
    elsif count >= @size
      @cache.shift
      @cache << ele
    else
      @cache << ele
    end
  end

  def show
    p @cache
    nil
  end

  private

end
