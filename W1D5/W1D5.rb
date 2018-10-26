class Stack
  attr_reader :stack
  def initialize
    @stack = []

  end

  def push(ele)
    @stack.push(ele)
    ele
  end

  def pop
    @stack.pop
  end

  def peek
    return @stack.last
  end
end

class Queue
  attr_reader :queue
  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue.unshift(ele)
    ele
  end

  def dequeue
    @queue.pop
  end

  def peek
    @queue.first
  end
end


class Map
  def initialize
    @map = []
  end

  def set(key, value)
    pair_idx = @map.index {|pair| pair[0] == key}
    if pair_idx
      @map[pair_idx][1] = value
    else
      @map.push([key, value])
    end
    value
  end

  def get(key, value)
    @map.each do |sub_arr|
      sub_arr.each do |k, v|
        return v if k == key
      end
    end
  end

  def delete(key)
    @map.each do |sub_arr|
      if sub_arr.include?(key)
        @map.reject! {|pair| pair[0] == key}
      end
    end
    get(key)
  end

  def show
    deep_dup(@map)
  end

  def deep_dup(arr)
    arr.map { |ele| ele.is_a?(Arry) ? deep_dup(ele) : ele }
  end
end
